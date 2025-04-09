import { Facebook, Github, Linkedin, Twitter, Plus, Instagram } from "lucide-react";
import Button from "../components/ui/butto";

export default function UserCard(){
    return(
        <div className="w[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
            <div className="size-48">
                <img src="/" className="rounded-full object-cover w-full h-full" alt="User Avatar" />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold min-w-0 overflow-hidden">Nome do Usuário</h3>
                </div>
                <p className="opacity-40">
                    Eu faço produtos para a internet
                </p>                
            </div>
            <div className="flex flex-col gap-2 w-full">
                <span className="uppercase text-xs font-medium">Links</span>
                <div className="flex gap-3">
                    <Github />
                    <Instagram />
                    <Facebook />
                    <Linkedin />
                    <Twitter />
                    <Plus />
                </div>
            </div>
            <div className="flex flex-col gap-3 w-full h-[172px]">
                <div className="w-full flex flex-col items-center gap-3">
                    <Button>Template SaaS - Compre Agora</Button>
                    <button>
                        <Plus/>
                    </button>

                </div>

            </div>
        </div>
    )
}