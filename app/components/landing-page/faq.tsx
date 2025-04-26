export default function Faq() {
  const faqItems = [
    {
      title: "Como funciona os links do in Bio?",
      description:
        "Com Project in Bio você pode criar um portfólio profissional e uma página de links em poucos minutos. Nossa plataforma oferece templates personalizáveis e uma interface fácil de usar.",
    },
    {
      title: "Há um período de teste?",
      description:
        "Sim! Oferecemos um teste gratuito de 7 dias para que você possa experimentar todos os recursos antes de decidir pela assinatura.",
    },
    {
      title: "Posso personalizar o design do meu portfólio?",
      description:
        "Sim! Com o Project in Bio, você pode personalizar cores, fontes e layout do seu portfólio para refletir sua marca pessoal.",
    },
    {
      title: "Preciso de habilidades técnicas para usar o Project in Bio?",
      description:
        "Não! Nossa plataforma é projetada para ser intuitiva e fácil de usar, mesmo para quem não tem experiência em design ou programação.",
    },
    {
      title: "O que acontece se eu cancelar minha assinatura?",
      description:
        "Você pode cancelar sua assinatura a qualquer momento. Após o cancelamento, você ainda terá acesso ao seu portfólio até o final do período de cobrança atual.",
    },
    {
      title: "Posso compartilhar meu portfólio em redes sociais?",
      description:
        "Sim! Você pode compartilhar seu portfólio em todas as principais redes sociais com um link único.",
    },
    {
      title: "Quais métodos de pagamento são aceitos?",
      description:
        "Aceitamos cartões de crédito e débito, além de pagamentos via Mercado Pago.",
    },
  ];

  return (
    <div className="my-20 flex flex-col items-center gap-16">
      <h3 className="text-4xl font-bold text-white">Perguntas Frequentes</h3>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item) => (
            <FaqItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item) => (
            <FaqItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-[351px] h-min flex flex-col gap-3 p-5 rounded-2xl border border-border-primary bg-background-primary">
      <p className="font-bold text-white">{title}</p>
      <p className="text-content-body">{description}</p>
    </div>
  );
}
