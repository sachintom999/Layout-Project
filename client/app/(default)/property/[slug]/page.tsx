'use client';
import React from 'react';
import { useEffect } from 'react';
import layoutData from '@/stores/mockdata.js';
export default function Page({ params }: { params: { slug: string } }) {
  const [data, setData] = React.useState(layoutData);
  const onSiteClick = (layout) => {
    if (layout?.type == 'road') return;
    const layoutNumber = layout?.number;
    alert(layoutNumber);
    const newData = data.map((item) => {
      if (item?.number === layoutNumber) {
        return {
          ...item,
          status: !layout?.status,
        };
      }
      return item;
    });
    setData(newData);
  };
  useEffect(() => {
    const newData = layoutData.map((layout) => {
      return {
        ...layout,
        status: true,
      };
    });

    setData(newData);
  }, [layoutData]);
  return (
    <div>
      {/* My Post: {params.slug} */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
        <div className="flex">
          <div className="w-full">
            <svg
              className="px-4"
              viewBox="0 0 600 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              {data?.map((layout, key) => (
                <g key={key} onClick={() => onSiteClick(layout)}>
                  {layout?.type === 'site' ? (
                    <polygon
                      className=" cursor-pointer hover:opacity-60"
                      points={layout.points}
                      fill={layout?.status ? '#d9f99d' : '#f9d9d9'}
                      stroke="#000"
                      strokeWidth="0.1"
                    />
                  ) : (
                    <polygon points={layout.points} fill="#e5e7eb" />
                  )}

                  {layout?.info?.map((text, key) => (
                    <text
                      key={key}
                      transform={text?.transform}
                      fill="#000"
                      fontSize="10"
                      fontWeight="normal">
                      {text?.type === 'number'
                        ? text?.text
                        : `${text?.text}' Feet Wide Road`}
                    </text>
                  ))}
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
