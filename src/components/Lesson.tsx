import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: 'live' | 'class'
}

export default function Lesson(props: LessonProps) {
  const isLessonAvaliable = isPast(props.avaliableAt);
  const avaliableDateFormat = format(props.avaliableAt, "EEEE' • 'd' de 'MMM' • 'k'h'mm", {
    locale: ptBR,
  })

  return (
    <Link to={`/Event/lesson/${props.slug}`} className="group">
      <span className='text-gray-300'>
        {avaliableDateFormat}
      </span>

      <div className='rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500'>
        <header className='flex items-center justify-between'>
          {isLessonAvaliable ?(
            <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>): (
              <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
                Em Breve
              </span>
            )
        }
          <span className='text-xs rounded border border-green-300 py-[2px] px-2 font-bold'>
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className='text-gray-200 mt-5 block'>
          {props.title}
        </strong>
      </div>

    </Link>
  )
}
