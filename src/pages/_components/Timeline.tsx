import type { ReactElement } from "react";

export type TimelineItem = {
  content: string;
  label?: string;
  icon: ReactElement;
};

export const Timeline = ({ items }: { items: ReadonlyArray<TimelineItem> }) => {
  return (
    <ul className="timeline timeline-vertical mx-auto">
      {items.map((item, index) => (
        <li key={item.content}>
          {index % 2 === 0 && (
            <>
              {index !== 0 && <hr />}
              <div className="timeline-start timeline-box">{item.content}</div>
              <div className="timeline-middle">{item.icon}</div>
              {item.label && (
                <div className="timeline-end text-sm">{item.label}</div>
              )}
              {index !== items.length - 1 && <hr />}
            </>
          )}
          {index % 2 !== 0 && (
            <>
              <hr />
              {item.label && (
                <div className="timeline-start text-sm">{item.label}</div>
              )}
              <div className="timeline-middle">{item.icon}</div>
              <div className="timeline-end timeline-box">{item.content}</div>
              {index !== items.length - 1 && <hr />}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
