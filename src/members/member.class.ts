import {EGender} from "../constanta/deputat-gender";

export class MemberClass {
    name: string;
    age: number;
    gender: EGender;
    honesty: number;
    bribe: number


    constructor(name: string, age: number, gender: EGender, honesty: number, bribe: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honesty = honesty;
        this.bribe = bribe;
    }
    giveABribe(summ:number){

        if(summ<this.bribe){
            return console.log('Не успішно')
        } else if (this.bribe<=summ && summ<=(this.bribe*((this.honesty / 100) + 1))) {
            return console.log('Вагається')
        }else{
            return console.log('Успішно')
        }

    }
}

export class MemberRemove {
    name: string;
    age?: number;
    gender?: EGender;
    honesty?: number;
    bribe?: number

    constructor(name: string, age: number, gender: EGender, honesty: number, bribe: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honesty = honesty;
        this.bribe = bribe;
    }

}


// export let DavydArah = new MemberClass('Арахамія Давид Георгійович',32,EGender.Male,70,5000);
// export let MishaAnan = new MemberClass('Ананченко Михайло Олегович',27,EGender.Male,70,3000);
// export let AndriyJyr = new MemberClass('Жупанин Андрій Вікторович',32,EGender.Male,80,10000);
// export let AlexKov = new MemberClass('Ковальов Олексій Іванович',32,EGender.Male,60,15000);
// export let ValeraKol = new MemberClass('Колюх Валерій Вікторович',48,EGender.Male,87,20000);
// export let MVV = new MemberClass('Медведчук Віктор Володимирович',67,EGender.Male,0,0.0000000000000001);
// export let KIV = new MemberClass('Кива Ілля Володимирович',44,EGender.Male,0,10000);
// export let BYA = new MemberClass('Бойко Юрій Анатолійович',63,EGender.Male,10,300000);
// export let RVZ = new MemberClass('Рабінович Вадим Зіновійович',69,EGender.Male,20,3000000);
// export let KTR = new MemberClass('Козак Тарас Романович',49,EGender.Male,20,30000);
// export let OAP = new MemberClass('Осадчук Андрій Петрович',50,EGender.Male,90,30000);
// export let PNP = new MemberClass('Піпа Наталія Романівна',37,EGender.Male,95,10000);
// export let RKO = new MemberClass('Рудик Кіра Олександрівна',36,EGender.Male,70,30000);
// export let RYI = new MemberClass('Рущишин Ярослав Іванович',54,EGender.Male,70,30000);
// export let SIR = new MemberClass('Совсун Інна Романівна',37,EGender.Male,70,30000);
// export let TUV = new MemberClass('Тимошенко Юлія Володимирівна',61,EGender.Male,60,50000);
// export let YAV = new MemberClass('Яценко Антон Володимирович',44,EGender.Male,50,5000);
// export let NGM = new MemberClass('Немиря Григорій Михайлович',61,EGender.Male,80,30000);
// export let LAV = new MemberClass('Лабунська Анжеліка Вікторівна',54,EGender.Male,75,2000);
// export let KII = new MemberClass('Крулько Іван Іванович',40,EGender.Male,70,32500);
// export let es = [AndriyParubiy,IrkaGer,MihaZabrod,SonyaFedyn,PetroRoshen]
// export let sn = [DavydArah, MishaAnan, AndriyJyr, AlexKov, ValeraKol];
// export let opzj = [MVV, KIV, BYA, RVZ, KTR];
// export let golos = [OAP, PNP, RKO, RYI, SIR];
// export let bat = [TUV, YAV, NGM, LAV, KII];
