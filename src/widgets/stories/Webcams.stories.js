import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs";

import Webcams from "../Webcams";

/**
 * Default set of webcams to display.
 */
export const webcamsDefault = {
  err: null,
  data: {
    success: true,
    webcam: {
      name: "Studio One",
      code: "ST1",
      images: [
        {
          id: "st1_dj",
          url: "http://cctv/st1-dj.jpg"
        },
        {
          id: "st1_guest",
          url: "http://cctv/st1-guest.jpg"
        }
      ]
    }
  }
};

/**
 * Studio 2 webcams.
 */
export const webcamsStudio2 = {
  err: null,
  data: {
    success: true,
    webcam: {
      name: "Studio Two",
      code: "ST2",
      images: [
        {
          id: "st2_dj",
          url: "http://cctv/st2-dj.jpg"
        },
        {
          id: "st2_guest",
          url: "http://cctv/st2-guest.jpg"
        }
      ]
    }
  }
};

storiesOf("Widgets/Webcams", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Webcams
      err={object("err", webcamsDefault.err)}
      data={object("data", webcamsDefault.data)}
    />
  ))
  .add("Studio 2", () => (
    <Webcams err={webcamsStudio2.err} data={webcamsStudio2.data} />
  ));
