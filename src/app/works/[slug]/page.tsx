import post1 from "@/assets/branding-makestudio/post_image_1.webp";
import post2 from "@/assets/branding-makestudio/post_image_2.webp";
import post3 from "@/assets/branding-makestudio/post_image_3.webp";
import post4 from "@/assets/branding-makestudio/post_image_4.webp";
import post5 from "@/assets/branding-makestudio/post_image_5.webp";
import post6 from "@/assets/branding-makestudio/post_image_6.webp";
import Image from "next/image";

interface WorkDetailPageProps {
  params: {
    slug: string;
  };
}

const posts = [
  {
    image: post1,
  },
  {
    image: post2,
  },
  {
    image: post3,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    image: post4,
  },
  {
    image: post5,
  },
  {
    image: post6,
  },
];

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  return (
    <div className="bg-secondary-700 text-secondary-50 pt-44 px-56 pb-56">
      <div className="flex justify-between items-end">
        <h2 className="title">Branding Makestudio*</h2>
        <div className="flex justify-between text-xl gap-56">
          <span>UI/UX Website Designer</span>
          <span>
            <i>2023</i>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-16 mt-40">
        {posts.map((post, index) => (
          <div key={index}>
            {post.image && (
              <Image src={post.image} alt="post" className="w-full" />
            )}
            {post.text && <p className="text-lg max-w-[75%]">{post.text}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
