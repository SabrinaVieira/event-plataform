import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from "react-router-dom";
import ClassNames from 'classnames';
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: 'live' | 'class'
}

export default function Lesson(props: LessonProps) {
  const { slug } = useParams<{slug: string}>();

  const isLessonAvaliable = isPast(props.avaliableAt);
  const avaliableDateFormat = format(props.avaliableAt, "EEEE' • 'd' de 'MMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/Event/lesson/${props.slug}`} className="group">
      <span className='text-gray-300'>
        {avaliableDateFormat}
      </span>

      <div className={ClassNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500': isActiveLesson,
        //'group-hover:border-white': isActiveLesson,

      })}
      // {`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500': ''}`}
      >
        <header className='flex items-center justify-between'>
          {isLessonAvaliable ?(
            <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>): (
              <span className={classNames('text-sm font-medium flex items-center gap-2', {
                'text-white': isActiveLesson,
                'text-orange-500': !isActiveLesson
              })}
              // 'text-sm text-orange-500 font-medium flex items-center gap-2'
              >
              <Lock size={20} />
                Em Breve
              </span>
            )
        }
          <span className={classNames('text-xs rounded border border-green-300 py-[2px] px-2 font-bold',{
            'border-white': isActiveLesson,
          })}>
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={classNames(' mt-5 block', {
          'text-white' : isActiveLesson,
          'text-gray-200' : !isActiveLesson
        })}>
          {props.title}
        </strong>
      </div>

    </Link>
  )
}
