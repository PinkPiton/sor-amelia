"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  const sections = [
    {
      title: "Il coccodrillo come fa",
      content: `
        <p>
          Oggi tutti insieme cercheremo di imparare come fanno per parlare fra di loro gli animali.
          Come fa il cane? bau bau
          e il gatto? miao
          l'asinello? hi hoo hi hoo
          la mucca? muuuuu...!!!
          la rana? cra cra
          la pecora? beee...!!!
          e il coccodrillo?...
          e il coccodrillo?...
        </p>
        <p>
          Il coccodrillo come fa
          non c'è nessuno che lo sa
          si dice mangi troppo
          non metta mai il cappotto
          che con i denti punga
          che molto spesso pianga
          Però quand'è tranquillo come fa sto coccodrillo?...
        </p>
        <p>
          Il coccodrillo come fa
          non c'è nessuno che lo sa
          si arrabbia ma non strilla
          sorseggia camomilla
          e mezzo addormentato se ne va.
        </p>
        <p>
          Guardo sui giornali non c'è scritto niente
          sembra che il problema non importi... A chi?
          alla gente
          ma se per caso al mondo c'è qualcuno che lo sa
          la mia domanda è ancora questa qua!
        </p>
        <p>
          Il coccodrillo come fa
          non c'è nessuno che lo sa
          si dice mangi troppo
          non metta mai il cappotto
          che con i denti punga
          che molto spesso pianga
          Però quand'è tranquillo come fa sto coccodrillo?...
        </p>
        <p>
          Il coccodrillo come fa
          non c'è nessuno che lo sa
          si arrabbia ma non strilla
          sorseggia camomilla
          e mezzo addormentato se ne va.
        </p>
        <p>
          Adesso ripetiamo se vogliamo ricordare come fanno per parlare tra di loro gli animali
          come fa il cane? bau bau
          e il gatto? miao
          l'asinello? hi hoo hi hoo
          la mucca? muuuuu...!!!
          la rana? cra cra
          la pecora? beee...!!!
          e il coccodrillo?...
          e il coccodrillo?...
        </p>
        <p>
          Il coccodrillo come fa
          non c'è nessuno che lo sa
          si dice mangi troppo
          non metta mai il cappotto
          che con i denti punga
          che molto spesso pianga
          Però quand'è tranquillo come fa sto coccodrillo?...
        </p>
        <p>
          Il coccodrillo come fa
          non c'è nessuno che lo sa
          si arrabbia ma non strilla
          sorseggia camomilla
          e mezzo addormentato se ne va.
        </p>
        <p>
          Allora, avete capito come fa il coccodrillo?
          lui mezzo addormentato se ne va!
        </p>
      `,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Canzoni per Bambini</h1>
      <div className="grid grid-cols-2 gap-6 items-center">
        {sections.map((section, index) => (
          <Card key={index} isHoverable>
            <CardHeader>
              <h2 className="text-lg font-bold">{section.title}</h2>
            </CardHeader>
            <CardBody>
              <article
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </CardBody>
          </Card>
        ))}
        <Image src={"/bomba.jpg"} alt="bomba" width={650} height={600} />
      </div>
    </div>
  );
}
