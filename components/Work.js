import Image from "next/image";
import dog1 from "../public/images/dog1.jpg";
import dog2 from "../public/images/dog2.jpg";
import dog3 from "../public/images/dog3.jpg";

const Work = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              class="object-cover object-center rounded"
              alt="dog"
              src={dog1}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Banho
            </h1>
            <p class="mb-8 leading-relaxed">
              Utilizamos produtos de alta qualidade e adequados para cada tipo
              de pelagem, garantindo um banho suave e eficaz. Nossa equipe
              especializada está treinada para lidar com diferentes
              temperamentos e necessidades, oferecendo um ambiente tranquilo e
              seguro para o seu pet. Além de limpar e higienizar a pelagem,
              também cuidamos das orelhas, unhas e dentes do seu pet, para
              garantir uma saúde geral melhorada. Valorizamos a individualidade
              de cada pet e adaptamos o banho de acordo com suas preferências e
              necessidades específicas. Venha experimentar o nosso serviço de
              banho excepcional e veja como seu pet ficará fresco, cheiroso e
              com o pelo brilhante.
            </p>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              class="object-cover object-center rounded"
              alt="dog"
              src={dog2}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Tosa
            </h1>
            <p class="mb-8 leading-relaxed">
              Nosso serviço de tosa para pets oferece um cuidado profissional e
              estilizado para deixar seu amiguinho com um visual impecável.
              Nossa equipe de tosadores experientes e habilidosos utiliza
              técnicas modernas e seguras para garantir um resultado estético de
              alta qualidade. Trabalhamos em estreita colaboração com você,
              ouvindo suas preferências e sugestões, para criar um estilo de
              tosa que realce a beleza e a personalidade do seu pet.
            </p>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              class="object-cover object-center rounded"
              alt="dog"
              src={dog3}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Cuidados
            </h1>
            <p class="mb-8 leading-relaxed">
              Nossa equipe de profissionais dedicados é apaixonada por animais e
              está comprometida em garantir que cada pet receba cuidados
              personalizados e de alta qualidade. Dos momentos de brincadeira e
              passeios, até a alimentação e higiene diária, cuidaremos de todas
              as necessidades do seu animal de estimação. Além disso, oferecemos
              serviços de saúde preventiva, como vacinação e controle de
              parasitas, para garantir o bem-estar contínuo do seu pet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
