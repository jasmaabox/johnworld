import { useEffect } from 'react';
import Head from 'next/head';

import { config, content } from '@lib/content';
import SpazCard from '@components/SpazCard';
import SnakeText from '@components/SnakeText';
import WaveText from '@components/WaveText';

export default function Home() {

  useEffect(() => {
    const playMusic = async () => {
      const bg = document.getElementById('bg-music');
      bg.volume = 0.2;
      try {
        await bg.play();
      } catch (e) {

      }
    }
    playMusic();

  }, []);

  return (
    <>
      <Head>
        <title>{config.siteName}</title>
        <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
      </Head>

      <div className="md:container md:mx-auto p-10">
        <audio id="bg-music" loop>
          <source src="exarm.mp3" type="audio/mp3" />
        </audio>

        <div className="grid grid-cols-12">
          <div className="col-span-full lg:col-start-3 lg:col-span-8">

            <SpazCard className="flex flex-col items-center justify-center p-20 rounded-lg m-4">
              <div className="w-60 h-60 flex items-center justify-center">
                <img className="rounded-full rotate linear infinite" src={content.profileImg} />
              </div>
              <h1 className="text-4xl font-semibold mt-3"><SnakeText text={content.name} /></h1>
              <div className="mt-3">
                <span className="text-2xl">{content.description}</span>
              </div>
            </SpazCard>

            <h1 className="text-4xl mt-10"><SnakeText text="Work Timeline" /></h1>
            {
              content.work.map(workItem => (
                <SpazCard key={workItem.title} className="m-4 p-8 rounded-lg">
                  <span className="text-xs">{workItem.startDate} - {workItem.endDate}</span>
                  <h1 className="text-2xl"><WaveText text={`${workItem.company} - ${workItem.title}`} /></h1>
                  <h1 className="text-lg whitespace-pre-wrap">{workItem.description}</h1>
                </SpazCard>
              ))
            }

            <h1 className="text-4xl mt-10"><SnakeText text="Projects" /></h1>
            {
              content.projects.map(projectItem => (
                <SpazCard key={projectItem.name} className="m-4 p-8 rounded-lg">
                  <h1 className="text-2xl"><WaveText text={projectItem.name} /></h1>
                  <h1 className="text-lg whitespace-pre-wrap">{projectItem.description}</h1>
                </SpazCard>
              ))
            }

            <div className="mt-10">
              <a href="https://www.youtube.com/watch?v=Q6Pqu9PI1gE">rise again cover by Orchestr/a/</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
