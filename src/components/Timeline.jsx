import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {  FaCreditCard, FaBook, FaImage, FaCogs } from 'react-icons/fa';
import Typography from "@mui/material/Typography";
import { useState } from "react";

const iconMap = {
  "🧸 animals": FaCreditCard,
  "💳 staticCard": FaCreditCard,
  "📖 books": FaBook,
  "🎞pics": FaImage,
  "⚙comps": FaCogs,
};

export default function CustomizedTimeline() {
  const [roadMap] = useState([
    {
      title: "🧸 animals",
      highlight: "state",
      description: "State have default value can be changed by click events",
    },
    {
      title: "💳 staticCard",
      highlight: "props",
      description: "Use props to share data between component and its children components",
    },
    {
      title: "📖 books",
      highlight: "context & hook",
      description: "useContext() to share data, react hook useEffect() for components render",
    },
    {
      title: "🎞pics",
      highlight: "dynamic",
      description: "Dynamic render components",
    },
    {
      title: "⚙comps",
      highlight: "custom hooks",
      description: "Custom a React Router component by useReducer and taste Tailwind CSS",
    },
  ]);

  return (
    <Timeline position="alternate" className="text-white">
      {roadMap.map((item, index) => {
        const Icon = iconMap[item.title] || FaCogs;
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align={index % 2 === 0 ? "right" : "left"}
              variant="body2"
              className="text-gray-300 text-xl font-semibold"
            >
              {item.title}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector className="bg-blue-400" />
              <TimelineDot className="bg-blue-500 p-3">
                <Icon className="text-white text-3xl" />
              </TimelineDot>
              <TimelineConnector className="bg-blue-400" />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h5" component="span" className="font-bold text-blue-300">
                {item.highlight}
              </Typography>
              <Typography className="text-gray-300 mt-2 text-lg">
                {item.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
