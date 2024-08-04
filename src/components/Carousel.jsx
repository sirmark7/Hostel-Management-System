import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import {PropTypes} from 'prop-types'
import Dots from './CarouselDots'
import Autoplay from "embla-carousel-autoplay";


const Carousel = ({ children, ...options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true},[Autoplay()]);

  // We need to track the selectedIndex to allow this component to re-render in react.
  // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);
  const length = React.Children.count(children);
  return (
    
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">{children}</div>
    <Dots itemsLength={length} selectedIndex={selectedIndex} />
    </div>
  );
};

Carousel.propTypes = {
  children:PropTypes.node,
  options:PropTypes.object,
}
export default Carousel;
