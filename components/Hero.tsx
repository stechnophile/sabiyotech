import Image from "next/image";
import {useTranslations} from 'next-intl';
export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <section 
        id="home"
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white"
      >
        {/* Digital Network Background */}
        <div className="absolute inset-0 bg-center bg-cover opacity-15"
          style={{
            backgroundImage: "url('/images/Digital_network.jpeg')",
          }}
        >

        </div>
             
        
        {/* Hero Content */}

     <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

    {/* Left Side */}
        <div className="max-w-3xl">
          

          <p className="mb-4 font-semibold uppercase tracking-widest text-blue-400">
            {/*Election Technology                    • AI                    • Cybersecurity*/}
            {t('subtitle')}
          </p>

          <h1 className="text-6xl font-extrabold leading-tight">
            {t('title')}
            {/*Building the Future of
            <br />
            Secure, Transparent &
            <br />
            Inclusive Elections*/}
          </h1>

          <p className="mt-8 text-xl text-slate-300 leading-8">
            {/*Welcome to my Election Technology Knowledge Hub.
            I share research, case studies, and insights on election
            technology, cybersecurity, artificial intelligence,
            and digital democracy.*/}
            {t("description")}
          </p>

          </div>
          {/* Right Side
          <div className="flex justify-center">

            <div className="relative">

            
                <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl">
                </div>
              <Image
                src="/images/website_hero2.png"
                alt="Yogesh Aryal"
                width={800}
                height={550}
                priority
                className="object-contain drop-shadow-2xl"
              /> 

            </div>

          </div>*/}

        </div>
    </section>
  );
}