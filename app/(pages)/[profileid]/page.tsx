import ProjectCard from "@/app/commons/project-card";
import { TotalVisits } from "@/app/commons/total-visits";
import UserCard from "@/app/commons/use-card";
import { getProfileData } from "@/app/server/get-profile-data";
import { auth } from "@/app/lib/auth";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewProject from "./new-project";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileid: string }>;
}) {
  const { profileid } = await params;

  const profileData = await getProfileData(profileid);
  if (!profileData) return notFound();

  // Aqui você precisa usar await
  const session = await auth();

  const isOwner = profileData.userId === session?.user?.id;

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
        <span>Você está usando a versão trial</span>
        <Link href={`/${profileid}/upgrade`}>
          <button className="text-accent-green font-bold">
            Faça o upgrade agora
          </button>
        </Link>
      </div>
      <div className="w-1/2 flex justify-center h-min">
        <UserCard />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        {isOwner && <NewProject profileid={profileid} />}
      </div>
      <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
        <TotalVisits />
      </div>
    </div>
  );
}
