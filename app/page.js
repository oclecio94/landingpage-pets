import Image from "next/image";
import pets from "../public/images/pets.jpg";

export default function Home() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
        <Image
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="banner"
          src={pets}
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Cuidados Profissionais para o seu Pet!
          </h1>
          <p class="mb-8 leading-relaxed">
            Bem-vindo à nossa loja especializada em serviços de cuidados de
            pets, tosa e banho! Aqui, no conforto do seu lar, oferecemos uma
            experiência excepcional para o seu animal de estimação. Nossa equipe
            altamente qualificada e apaixonada por animais está pronta para
            proporcionar um tratamento de primeira classe, garantindo que seu
            pet receba todo o carinho e atenção que ele merece. Com uma
            variedade de serviços personalizados, desde banhos relaxantes até
            tosas elegantes, estamos comprometidos em manter seu amiguinho com
            uma aparência impecável. Acreditamos que cada pet é único e tratamos
            cada um deles com cuidado individualizado. Venha conhecer nossos
            serviços e deixe seu pet desfrutar de uma experiência de beleza e
            bem-estar como nunca antes!
          </p>
        </div>
      </div>
    </section>
  );
}
