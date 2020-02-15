import React from "react";
import { render } from "@testing-library/react";

import PodcastDetailContent from "../components/PodcastDetailContent.js";

test("Test parsing podcast to PodcastDetailContent", () => {
  const podcast = {
    id: 2,
    title: "Ngobrolin Startup dan Teknologi",
    thumbnail:
      "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/1428780/1428780-1569855022815-0e347b2a10c15.jpg",
    url:
      "https://open.spotify.com/show/3cA81ivwFR2gDMF570j06X?si=AH_1jd89RcSBMyG7GBrJqw",
    episodes: [
      {
        id: 1,
        audio:
          "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-8-15/23738054-44100-2-29408e8ed4de1.m4a"
      },
      {
        id: 2,
        audio:
          "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-8-15/23738456-44100-2-e5d00161ffc53.m4a"
      }
    ]
  };
  const { getByRole, container } = render(
    <PodcastDetailContent podcast={podcast} />
  );
  const audio = container.querySelectorAll("audio");

  expect(getByRole("heading")).toHaveTextContent(
    "Ngobrolin Startup dan Teknologi"
  );
  expect(getByRole("img").getAttribute("src")).toEqual(
    "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/1428780/1428780-1569855022815-0e347b2a10c15.jpg"
  );
  expect(audio.length).toEqual(podcast["episodes"].length);
});
