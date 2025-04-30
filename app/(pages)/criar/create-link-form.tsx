"use client";

import { createLink } from "@/app/action/create-link";
import { verifyLink } from "@/app/action/verifyLink";
import Button from "@/app/components/ui/button";
import TextInput from "@/app/components/ui/text-input";
import { sanitizeLink } from "@/app/lib/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export function CreateLinkForm() {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(e.target.value));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (link.length === 0) return setError("Link não pode ser vazio");

    const isLinkTaken = await verifyLink(link);

    if (isLinkTaken) return setError("Link já está em uso");

    const isLinkCreated = await createLink(link);

    if (!isLinkCreated) return setError("Erro ao criar link");

    router.push(`/${link}`);

    console.log(link);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center gap-2"
        action=""
      >
        <span className="text-white">projectinbio.com/</span>
        <TextInput value={link} onChange={handleLinkChange} />
        <Button className="w-[126px]">Criar</Button>
      </form>

      <div>
        <span className="text-accent-pink">{error}</span>
      </div>
    </>
  );
}
