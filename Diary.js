import css from './Diary.module.css';

import TitlePage from '../components/TitlePage/TitlePage';
import DaySwitch from '../components/daySwitch/DaySwitch';
import DayDashboard from '../components/dayDashboard/DayDashboard';
import DayProducts from '../components/dayProducts/DayProducts';
import DayExercises from '../components/dayExercises/DayExercises';

import { fetchAllDiary } from '../redux/diary/diaryOperations';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { selectDiaryExercises, selectDiaryProducts } from 'redux/diary-origin/diarySelectors';
import formatDate from 'function/formatData';

// import formatDate from '../function/formatData';

export default function Diary() {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [formattedDate, setFormattedDate] = useState("2024-01-15");
  // треба перевести дату в рядок і робити запити з ним

  // ти прокидаєш цю функцію пропсом в компонент DaySwitch, але в DaySwitch не викорситовуєш
  // може краще прокидай formattedDate без функцій? якщо там потрібна дата
  const handleDate = date => {
    const formatedDate = formatDate(date);
    setSelectedDate(formatedDate);
  };
  // const productsInDiaryList = useSelector(state => state.diary);
  // console.log(productsInDiaryList);
  // const profile = useSelector(state => state);
  // console.log(profile);
  // const productsInDiaryList = useSelector(selectDiaryProducts);
  // const exercisesInDiaryList = useSelector(selectDiaryExercises);
  // const isLoadingDairy = useSelector(selectDiaryIsLoading)

  useEffect(() => {
    // const day = String(selectedDate.getDate()).padStart(2, '0');
    //   const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    //   const year = selectedDate.getFullYear();
    // const formattedDate = `${year}-${month}-${day}`;
    // setFormattedDate(formattedDate);

    dispatch(fetchAllDiary('2024-01-15'));
  }, [selectedDate, dispatch]);

  return (
    <div className={css.diaryPage}>
      <div className={css.calendarCont}>
        <TitlePage children="Diary" />

        <div className={css.calendar}>
          <DaySwitch handleDate={handleDate} />
        </div>
      </div>
      <div className={css.sectionCont}>
        <DayDashboard />
        <div>
          <DayProducts />
          <DayExercises />
        </div>
      </div>
    </div>
  );
}
