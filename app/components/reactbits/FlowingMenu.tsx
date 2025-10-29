import React from "react";
import { gsap } from "gsap";

interface MenuItemData {
  link: string;
  text: string;
  image: string;
}

interface MenuItemProps extends MenuItemData {
  index: number;
  onActive?: (index: number) => void;
  active?: boolean;
}

interface FlowingMenuProps {
  items?: MenuItemData[];
  onActive?: (index: number) => void;
  activeIndex?: number;
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({
  items = [],
  onActive,
  activeIndex,
}) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            index={idx}
            onActive={onActive}
            active={activeIndex === idx}
          />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  link,
  text,
  image,
  index,
  onActive,
  active,
}) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });

    onActive?.(index);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults }) as TimelineMax;
    tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }).to(
      marqueeInnerRef.current,
      {
        y: edge === "top" ? "101%" : "-101%",
      }
    );
  };

  const handleFocus = () => {
    onActive?.(index);
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="p-[1vh_1vw_0] text-[4vh] font-black uppercase leading-[1.15] text-[color:var(--cream)]">
          {text}
        </span>
        <div
          className="mx-[2vw] my-[2em] h-[7vh] w-[200px] rounded-[50px] bg-cover bg-center p-[1em_0] ring-1 ring-white/15"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ));
  }, [text, image]);

  return (
    <div
      className="relative flex-1 overflow-hidden text-center shadow-[0_-1px_0_0_rgba(255,255,255,0.18)]"
      ref={itemRef}
    >
      <a
        className={`relative flex h-full cursor-pointer items-center justify-center text-[4vh] font-black uppercase tracking-[0.28em] text-[color:var(--cream)] transition-colors no-underline ${
          active ? "text-[color:var(--navy-300)]" : "hover:text-[color:var(--navy-300)] focus-visible:text-[color:var(--navy-300)]"
        }`}
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        aria-current={active ? "true" : undefined}
      >
        {text}
      </a>
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-full translate-y-[101%] overflow-hidden bg-[linear-gradient(90deg,rgba(255,255,255,0.88),rgba(125,139,255,0.2))]"
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
