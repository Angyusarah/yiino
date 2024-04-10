const AboutCard = () => {
  const about = [
    {
      id: "Our Mission",
      idImg: mission,
      content: `dolor sit amet consectetur adipisicing elit. Officia
            exercitationem debitis alias repudiandae sed et animi dolores
            reiciendis similique magni ducimus in velit cumque, consequatur odit
            repellat dolorum ipsam sequi? Esse sequi quaerat dolorum vero, ipsa
            modi iure ullam debitis placeat est incidunt enim provident odio
            expedita deleniti culpa laborum vitae sunt maiores. Ea adipisci
            quidem soluta ex nobis libero. `,
      image: image2,
      content2: `dolor sit amet consectetur adipisicing elit. Officia
            exercitationem debitis alias repudiandae sed et animi dolores
            reiciendis similique magni ducimus in velit cumque, consequatur odit
            repellat dolorum ipsam sequi? Esse sequi quaerat dolorum vero, ipsa
            modi iure ullam debitis placeat est incidunt enim provident odio
            expedita deleniti culpa laborum vitae sunt maiores. Ea adipisci
            quidem soluta ex nobis libero. At nesciunt incidunt necessitatibus
            ut amet exercitationem rerum laboriosam quasi non sapiente, minus
            quod blanditiis et fuga pariatur voluptate mollitia sed? Veritatis
            ipsa amet sunt praesentium facere, voluptatibus accusantium`,
    },
  ];
  return (
    <div>
      {about.map((item, index) => (
        <AboutHero
          key={index}
          id={item.id}
          idImg={item.idImg}
          content={item.content}
          image={item.image}
          content2={item.content2}
        />
      ))}
    </div>
  );
};

export default AboutCard;
