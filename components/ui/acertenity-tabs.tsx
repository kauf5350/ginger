"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function Tabs({
  tabs,
  containerClassName,
  contentClassName,
}: {
  tabs: any[];
  containerClassName?: string;
  contentClassName?: string;
}) {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <div className="flex flex-col w-full">
      <div
        className={`flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full ${containerClassName}`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => {
              setActiveTab(tab);
            }}
            className={`relative px-4 py-2 rounded-full`}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {activeTab.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={`absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full`}
              />
            )}

            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <div className={`mt-4 w-full ${contentClassName}`}>
        {activeTab.content}
      </div>
    </div>
  );
}
