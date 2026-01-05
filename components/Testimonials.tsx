"use client";
import React from "react";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <div className="py-10 md:py-20 px-4 md:px-12 overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-primary font-langar">
          Their words says it all (Feedback){" "}
        </h2>
        <p className="text-secondary text-lg pt-5 font-lato">
          My highest priority is client satisfaction and i truly value the
          feedback i receive. Here are some testimonials from clients i have
          worked with
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-shrink-0 gap-6 pr-6"
            style={{ width: "fit-content" }}
          >
            {/* Render existing testimonials duplicated for loop */}
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div
                key={idx}
                className="w-[280px] md:w-[400px] flex-shrink-0 bg-zinc-900/50 border border-secondary/20 p-6 md:p-8 rounded-2xl hover:border-secondary transition-all duration-300 group hover:bg-zinc-900/80"
              >
                <div className="flex flex-col gap-4 h-full justify-between">
                  <div>
                    {/* Rating stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-secondary fill-secondary"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300 italic text-base leading-relaxed font-lato line-clamp-4">
                      {item.message}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-2 pt-4 border-t border-white/10">
                    <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border border-secondary/50 group-hover:border-secondary transition-colors">
                      <Image
                        src={item.image.replace("/public", "")}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-primary font-bold text-base font-lato">
                        {item.name}
                      </h4>
                      <p className="text-secondary text-sm font-lato opacity-80">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
