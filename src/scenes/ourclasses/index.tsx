import { ClassType, SelectedPage } from "@/shared/type";
import { motion } from "framer-motion";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import HText from "@/shared/HText";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Weight training can improve muscle strength and endurance. By lifting weights, you can increase the strength and size of your muscles, which can help you perform everyday activities more easily and improve your athletic performance.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Yoga can offer a range of physical and mental benefits. Regular yoga practice can improve flexibility, strength, and balance, and can also reduce stress and improve overall well-being.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Ab core exercises can help to strengthen and tone the muscles of the core, which can improve posture, balance, and stability.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Adventure activities can be a fun and exciting way to mix up a workout routine and try something new..",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Regular physical activity can improve overall health and well-being. It can help to reduce the risk of chronic diseases such as obesity, heart disease, and diabetes, and can also improve mental health and mood.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Gyms often offer a variety of training classes for their members. These classes can be led by certified instructors and may focus on a specific type of exercise or training goal.",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Evogym includes group fitness classes, such as aerobics, yoga, and
              spin, as well as specialized clubs and activities, such as martial
              arts, dance, and rock climbing. Group fitness classes are
              typically led by a instructor and involve a group of participants
              following along with a workout routine. These classes can be a
              great way to get a structured workout and motivation from being
              part of a group.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
