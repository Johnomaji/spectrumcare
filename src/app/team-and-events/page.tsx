import type { Metadata } from "next";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { ProfileGrid } from "@/components/sections/ProfileGrid";
import { Testimonial } from "@/components/sections/Testimonial";
import { EventList } from "@/components/sections/EventList";
import { DataTable } from "@/components/sections/DataTable";
import { PhotoGrid } from "@/components/sections/PhotoGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import * as content from "@/content/team";

export const metadata: Metadata = pageMetadata({
  title: "Our Team & Events",
  description:
    "Meet the Board of Trustees and multidisciplinary team of Spectrum Care Foundation, and find our upcoming workshops, screening days and awareness events in Abuja.",
  path: "/team-and-events",
});

export default function TeamAndEventsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("/team-and-events")} />

      <PageHero {...content.hero} theme="sunset" />

      <ProfileGrid
        id="trustees"
        headline="Board of Trustees"
        intro="Our trustees provide governance, guidance and accountability, and champion the Foundation in the community."
        profiles={content.trustees}
        tone="white"
        note={content.portraitNote}
      />

      <ProfileGrid
        id="leadership"
        headline="Our leadership and clinical team"
        intro="A multidisciplinary team that works together on every child's plan."
        profiles={content.leadership}
        tone="mist"
      />

      <Testimonial {...content.philosophy} accent="yellow" tone="white" />

      <EventList
        id="events"
        headline="Upcoming events"
        events={content.events}
        tone="mist"
      />

      <DataTable
        id="awareness-calendar"
        headline="Awareness calendar"
        intro="Days we mark together each year."
        headers={content.awarenessCalendar.headers}
        rows={content.awarenessCalendar.rows}
        accent="orange"
        tone="white"
        caption="Annual awareness days Spectrum Care marks"
      />

      <PhotoGrid
        id="gallery"
        headline="Moments from our events"
        photos={content.gallery}
        tone="mist"
        note="Add eight photographs from real events, each captioned with the event name and date."
      />

      <CtaBanner {...content.hostEvent} tone="orange" />
    </>
  );
}
