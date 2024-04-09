import useEmblaCarousel from "embla-carousel-react";
import EmblaOptionsType from "embla-carousel-react"
import { PropsWithChildren } from "react";

const a = EmblaOptionsType
type Props = { options?: typeof a } & PropsWithChildren;

const Slider = ({ children, options }: Props) => {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    ...options,
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-8">{children}</div>
    </div>
  );
};
export default Slider;
