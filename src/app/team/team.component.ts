import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'

import { Team } from '../models/team.model';
import { TeamService } from './service/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  // Teams?: Team[];

  teams = [
    {
      title: 'Сватбен агент',
      name: 'Кристелина',
      company: '',
      description: 'Криси е първият човек от екипа, с който се запознахме. Тя е супер позитивен и много весел човек. Никога няма да забравим първата ни среща. тогава тя каза, че да се организира сватба не е толкова трудно и направи всичко възможно, за да ни го докаже. Криси е винаги нареща с подходящ съвет и точни координати.',
      socialMedia: ''
    },
    {
      title: 'Сватбен тържество',
      name: 'Светлана Георгиева',
      company: 'Grant Hotel Millennium',
      description: 'Светнала и целият екип на Grant Hotel Millennium са спрахотни. Чувставаме се винаги добре дошли в хотела и всички са много любезни, изслушват нашите желания с внимание и стриктно ги изпълняват.',
      socialMedia: 'https://www.facebook.com/grandhotelmillenniumsofia'
    },
    {
      title: 'Сватбен Фотограф',
      name: 'Симон Вартерян',
      company: 'VS Studio',
      description: 'Симон е изключително забавен. Неговата креативност и нестандартно виждане за сватбената фотография беше причината да се спрем на него. Симон е художник, който рисува с богатата палитра от цветове на светлината.',
      socialMedia: 'https://www.facebook.com/svstudio' 
    },
    {
      title: 'Сватбен Видеограф',
      name: 'Илиян Матушев',
      company: 'Matushev Films',
      description: 'Запознахме се с Илиян по предпоръка на Симон. Видяхме съвместната им работа и разбрахме, че синхронът между екипът е много важен. След като се сещнахме с него опознахме по отблизо професионализмът му и бяхме възхитени от префесионализмът му.',
      socialMedia: 'https://www.facebook.com/videozasnemane'
    },
    {
      title: 'Сватбен DJ',
      name: 'Ивайло Тахчиев',
      company: '',
      description: 'Когато се запознахме с него връзката между него и младоженеца беше внезапна сякаш двамата допълваха мислите си. И решението беше взето мигновенно и без много обсъждане. Той ни помогна с ритуалите и песента за първият сватбен танц, както и със съвети за разпределението на гостите.',
      socialMedia: 'https://www.facebook.com/iv.tahchiev'
    },
    {
      title: 'Сватбен Декоратор',
      name: 'Иван и Синди',
      company: 'Сватбена агенция ИСИ',
      description: 'Първата ни среща с Иван и Синди беше много вълнуваща, докато слушаха как си представяме сватбеният ден виждах как идеите почват да се боричкат в главите им. Веднага взеха лист и химикал и започнаха да рисуват декори сякваш преживявайки нашите истори, как сме се запознали, къде сме били, как Алекс ми е предложил брак. Преживяваха всеки един момент заедно с нас и творяха.',
      socialMedia: 'https://www.facebook.com/isi.wedding/'
    },
    {
      title: 'Печатни Материяли',
      name: 'Сватбени покани от Дейните Моми',
      company: '',
      description: 'Тези момичета са истиснки вълшебници. Превърнаха всичките ни желания в перфетно изпълнение. Със Своята креативност всъхваха живот на всяко наше щудо желание.',
      socialMedia: 'https://www.facebook.com/deinite.momi'
    }
  ]

  constructor(private teamApi: TeamService) { }

  ngOnInit(): void {
    // this.teamApi.GetTeamList().snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({ key: c.payload.key, ...c.payload.val() }),
    //       console.log(changes)
    //     )
    //   )
    // ).subscribe(data => {
    //   this.teams = data;
    //   console.log(data)
    // });
  }
}
