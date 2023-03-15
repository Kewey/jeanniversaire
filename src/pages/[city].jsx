import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Home() {
  const {
    query: { city },
  } = useRouter()

  const [haveFinish, setHaveFinish] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm()

  const onSubmit = async (data) => {
    setHaveFinish(true)
    await fetch('/api/join-party', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

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
        <section className="relative min-h-[90vh] text-[#6860E8] px-6 pt-10 pb-28 flex flex-col justify-center">
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
            href="https://open.spotify.com/playlist/5pH2LEvyScKhkBSGrWG1f4?si=ef7022bde0ae402d&pt=8c8c8b7ec960f428426d27f693da0d27"
            className="bg-white rounded-full py-4 px-6 block text-center text-sm font-medium"
          >
            Ajouter mes bangers à la playlist Spotify
          </a>
        </section>

        <section id="infos" className="px-8 py-10">
          <h2 className="text-red mt-8 mb-8">Je veux savoir</h2>
          <p className="mb-2 font-medium">Si je demeure à :</p>
          <ul className="flex gap-2">
            <li>
              <Link
                href="/bordeaux#infos"
                className={[
                  'inline-block py-2 px-5 rounded-full border border-red text-red ',
                  city === 'bordeaux' && ' bg-red text-white ',
                ]}
              >
                Bordeaux
              </Link>
            </li>
            <li>
              <Link
                href="/perigueux#infos"
                className={[
                  'inline-block py-2 px-5 rounded-full text-red border border-red ',
                  city === 'perigueux' && ' bg-red text-white ',
                ]}
              >
                Périgueux
              </Link>
            </li>
          </ul>

          <div className="border border-red p-4 mt-4 rounded-xl">
            {city === 'bordeaux' ? (
              <>
                <ul>
                  <li className="mb-2">
                    📅 Vendredi 24 (dès 18h) -&gt; Dimanche 26 Mars (avant 11h)
                  </li>
                  <li className="mb-2">
                    📍{' '}
                    <a
                      className="text-blue-800 underline"
                      href="https://www.google.com/maps/dir//193+Rue+des+Combeaux,+24650+Chancelade/@45.200691,0.6234511,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47ff76eb89121d9b:0x554017034124a72f!2m2!1d0.6584705!2d45.2006359!3e0?hl=fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      193 rue des combeaux, 24650 Chancelade
                    </a>
                  </li>
                  <li className="mb-2">
                    🧳 Emmène des draps de lit 2 places et ta serviette de bain
                  </li>
                  <li className="mb-2">
                    🤑 Une participation financière de 20€ pour deux
                    journées/soirées de plaisir
                  </li>
                </ul>
                <a
                  href="https://lydia-app.com/pots?id=47289-jeannot-s-week-end"
                  target="_blank"
                  className="py-2 px-4 block text-center rounded-full bg-blue-300"
                >
                  🐀 20€ stp 🐀
                </a>
              </>
            ) : (
              <>
                <ul>
                  <li className="mb-2">📅 Samedi 25 (dès 19h)</li>
                  <li className="mb-2">
                    📍{' '}
                    <a
                      className="text-blue-800 underline"
                      href="https://www.google.com/maps/dir//193+Rue+des+Combeaux,+24650+Chancelade/@45.200691,0.6234511,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47ff76eb89121d9b:0x554017034124a72f!2m2!1d0.6584705!2d45.2006359!3e0?hl=fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      193 rue des combeaux, 24650 Chancelade
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </section>

        <section id="form" className="px-8 pb-10">
          <h3>Ma réponse à ton invitation</h3>
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <div className="mb-1">
              <input
                type="radio"
                {...register('isComming', { required: true })}
                id="come"
                value={true}
              />
              <label htmlFor="come" className="ml-1">
                Je fais honneur de ma présence
              </label>
            </div>

            <div className="mb-3">
              <input
                type="radio"
                {...register('isComming', { required: true })}
                id="abandon"
                value={false}
              />
              <label htmlFor="abandon" className="ml-1">
                Je ne viens pas désolé...
              </label>
            </div>

            <h3>Mon petit nom :</h3>
            <input
              type="text"
              {...register('name', { required: true })}
              className="block mb-3 py-2 px-4 w-full border rounded-md"
              placeholder="ex: Jeanne"
            />

            {city === 'bordeaux' && (
              <>
                <h3>Si je viens, je préfère co-voiturer avec :</h3>
                <div className="mb-1">
                  <input
                    type="radio"
                    {...register('carTeam', { required: true })}
                    id="Louise"
                    value="Louise"
                  />
                  <label htmlFor="Louise" className="ml-1 inline-flex flex-col">
                    <span>Louise la pilote</span>
                    <div className="text-sm text-gray-400">
                      <span>📍 5 Place Rodesse</span>
                    </div>
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    type="radio"
                    {...register('carTeam', { required: true })}
                    id="Jordan"
                    value="Jordan"
                  />
                  <label htmlFor="Jordan" className="ml-1 inline-flex flex-col">
                    <span>Jordan le pilote</span>
                    <div className="text-sm text-gray-400">
                      <span>📍 4 rue du Commandant Edouard Gamas</span>
                    </div>
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    type="radio"
                    {...register('carTeam', { required: true })}
                    id="Solo"
                    value="Solo"
                  />
                  <label htmlFor="Solo" className="ml-1">
                    Je me débrouille
                  </label>
                </div>
              </>
            )}

            <button
              className="mt-8 py-2 px-4 block w-full text-center rounded-full bg-purple-600 text-white disabled:bg-slate-100 disabled:text-gray-400"
              disabled={!isValid || haveFinish}
            >
              {isValid && haveFinish ? "Merci d'avoir répondu ❤" : 'J’ai fini'}
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
