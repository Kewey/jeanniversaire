import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const { query } = useRouter()
  console.log(query.city)

  return (
    <>
      <Head>
        <title>Jeanniversaire</title>
        <meta
          name="description"
          content="Anniversaire de la jeune fille de Perigueux city"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-xl min-h-screen w-full mx-auto">
        <section className="relative min-h-[90vh] text-[#6860E8] px-6 py-10 flex flex-col justify-center">
          <h1 className="font-beastly text-4xl text-center mb-14">
            Jeannot’s 27th Birthday
          </h1>

          <div className="bg-red rounded-full h-[200px] w-[200px] overflow-hidden mx-auto">
            <img src="/assets/Jeannot.png" className="block" />
          </div>

          <p className="text-center text-xl font-black mt-12">
            Il est arrivé... Le jour où la plus souriante des meufs est née.
          </p>

          <div className="flex items-center justify-between mt-12">
            <img
              height={32}
              width={32}
              src="https://em-content.zobj.net/thumbs/120/apple/325/mirror-ball_1faa9.png"
            />
            <p className="text-center text-xl font-black">
              Venez twerker à ma boum !
            </p>
            <img
              height={32}
              width={32}
              src="https://em-content.zobj.net/thumbs/120/apple/325/mirror-ball_1faa9.png"
            />
          </div>

          <img
            src="/assets/Catto.png"
            className="absolute bottom-[-20px] left-6"
          />
        </section>
        <section className="bg-[#6860E8] text-white px-6 py-20">
          <div className="flex items-center justify-between mb-14">
            <img
              height={32}
              width={32}
              src="https://em-content.zobj.net/thumbs/120/apple/325/police-car-light_1f6a8.png"
            />
            <p className="text-center font-light ">
              Ceci n’est pas une simple soirée... <br /> Vous allez devoir user
              de votre imagination pour vous déguiser.
            </p>
            <img
              height={32}
              width={32}
              src="https://em-content.zobj.net/thumbs/120/apple/325/police-car-light_1f6a8.png"
            />
          </div>

          <h2 className="mb-14">Le thème ?</h2>

          <p className="text-center">
            Un costume qui commence par la 1ère lettre de ton prénom !
          </p>
          <p className="text-center">
            Objets, personnage fictif ou célébrités...
          </p>
        </section>
        <section className="bg-[#1ED760] px-6 py-10">
          <a
            href="http://"
            className="bg-white rounded-full py-4 px-6 block text-center"
          >
            Ajouter mes bangers musicaux dans la playlist Spotify
          </a>
        </section>

        <section id="infos" className="px-8 py-10">
          <h2 className="text-red mt-8 mb-8">Je veux savoir</h2>
          <p className="mb-2 font-medium">Si je demeure à :</p>
          <ul className="flex gap-2">
            <li>
              <Link
                href="/bordeaux#infos"
                className="inline-block py-2 px-5 bg-red rounded-full text-white border border-red"
              >
                Bordeaux
              </Link>
            </li>
            <li>
              <Link
                href="/perigueux#infos"
                className="inline-block py-2 px-5 bg-transparent rounded-full text-red border border-red"
              >
                Périgueux
              </Link>
            </li>
          </ul>

          <div className="border border-red p-4 mt-4 rounded-xl">
            <ul>
              <li>
                📅 Vendredi 24 (dès 18h) -> Dimanche 26 Mars (avant 11h) 📍 193
                rue des combeaux, 24650 Chancelade 🧳 Emmène des draps de lit 2
                places et ta serviette de bain 🤑 Une participation financière
                de 20€ pour deux journées/soirées de plaisir
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
