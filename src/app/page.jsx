import Image from "next/image";
import FormInvite from "./_components/form-invite";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14 shadow-[0_0_6rem_3.5rem_#e77bad_inset] md:shadow-[0_0_22rem_3rem_#e77bad_inset]">
      <div className="max-w-80">
        <div className="relative">
          <Image src="/diddle-hello.png" className="absolute left-[200px] bottom-8" width={125} height={108} />
          <h1 className="text-4xl font-bold mb-4 mt-16">Je t’invite à <span className="block">mon anniversaire</span></h1>
        </div>
        <p className="text-xl opacity-60 mb-4">Salut moi c’est Jeanne j’ai 25 ans et 3 ans d’expériences.</p>
        <p className="text-xl opacity-60">Viens faire la fête avec moi et mes amis.</p>
        <Image src="/from-to.png" className="my-4" width={320} height={175} />
        <div className="flex items-center gap-8 text-lg">
          <Image src="/diddle-ballon.png" height={131} width={83} />
          <ul>
            <li>Date: <time dateTime="2024-03-23">Samedi 23 Mars</time></li>
            <li>Heure: <time dateTime="20:00">20h</time></li>
            <li>Lieu: <span title="4 rue commandant Edouard Gamas, Bordeaux, 33300">Chez moi</span></li>
          </ul>
        </div>
        <FormInvite />
      </div>
    </main>
  );
}
