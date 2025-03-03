import { NextResponse } from "next/server";
import axios from "axios";
import { BASE_URL } from "@/utils/apiConfig";

export async function GET() {
  try {
    const aboutUs = await axios.get(`${BASE_URL}/basic/about_us/`);
    const mission = await axios.get(`${BASE_URL}/basic/our_mission/`);
    const whyUs = await axios.get(`${BASE_URL}/basic/whyus/`);
    const activities = await axios.get(`${BASE_URL}/product/list/`);
    const contactUs = await axios.get(`${BASE_URL}/basic/contact_us/`);

    return NextResponse.json({
      aboutUs: aboutUs.data,
      mission: mission.data,
      whyUs: whyUs.data,
      activities: activities.data,
      contactUs: contactUs.data
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Failed to fetch data" }, { status: 500 });
  }
}
