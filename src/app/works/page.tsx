import ImageWithBorder from "@/components/image-with-border";
import imageSlider from "@/assets/image-slider-1.webp";
import Divider from "@/components/divider";
import Product from "@/components/product";
import ButtonSeeMore from "@/components/button-see-more";

export default function WorksPage() {
  return (
    <div className="bg-white pt-44 px-56 flex flex-col w-full pb-20">
      <div className="flex justify-between items-end mb-20">
        <h2 className="text-6xl max-w-[30rem] leading-[4rem] tracking-[-4px] inline-block">
          Creating Next Level{" "}
          <span className="text-primary-500">Digital Products</span>
        </h2>
        <span className="tracking-tighter text-2xl">
          <i>Scroll to Explore</i>
        </span>
      </div>

      <Divider />
      <div className="my-14">
        <Product
          src={imageSlider}
          alt="product-showcase"
          title="UI/UX Website Designer"
          year="2023"
        />
      </div>
      <Divider />
      <div className="my-14">
        <Product
          src={imageSlider}
          alt="product-showcase"
          title="UI/UX Website Designer"
          year="2023"
        />
      </div>
      <Divider />
      <div className="my-14">
        <Product
          src={imageSlider}
          alt="product-showcase"
          title="UI/UX Website Designer"
          year="2023"
        />
      </div>
      <Divider />

      <ButtonSeeMore />
    </div>
  );
}
