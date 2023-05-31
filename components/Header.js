import { MdPets } from "react-icons/md";

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
          <MdPets className="w-10 h-10" />
          <span class="ml-3 text-xl">CuidaPets</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">Home</a>
          <a class="mr-5 hover:text-gray-900">Serviços</a>
          <a class="mr-5 hover:text-gray-900">Contato</a>
        </nav>

        <button class="inline-flex items-center bg-pink-300 border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base mt-4 md:mt-0">
          Entrar
        </button>
        <button class="inline-flex items-center bg-pink-300 border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base mt-4 md:mt-0 ml-1">
          Cadastrar
        </button>
      </div>
    </header>
  );
};

export default Header;
