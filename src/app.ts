import {VrClass} from "./VR/vr.class";
import {PartyClass} from "./party/party.class";
import {MemberClass} from "./members/member.class";
import {EGender} from "./constanta/deputat-gender";
import {
    BATKIVSCHYNA,
    EVROPEYSKA_SOLIDARNIST,
    SLUGA_NARODU,
    OPZj,
    GOLOs
} from "./constanta/Party.interface";


export let PetroRoshen = new MemberClass('Петро Олейксійович Порошенко', 65, EGender.Male, 90, 680000.6)
export let AndriyParubiy = new MemberClass('Парубій Андрій Володимирович', 50, EGender.Male, 75, 28000)
export let IrkaGer = new MemberClass('Геращенко Ірина Володимирівна', 50, EGender.Female, 40, 10000)
export let MihaZabrod = new MemberClass('Забродський Михайло Віталійович', 48, EGender.Male, 70, 5000)
export let SonyaFedyn = new MemberClass('Федина Софія Романівна', 37, EGender.Female, 95, 50000)
export let DavydArah = new MemberClass('Арахамія Давид Георгійович', 32, EGender.Male, 70, 5000);
export let MishaAnan = new MemberClass('Ананченко Михайло Олегович', 27, EGender.Male, 70, 3000);
export let AndriyJyr = new MemberClass('Жупанин Андрій Вікторович', 32, EGender.Male, 80, 10000);
export let AlexKov = new MemberClass('Ковальов Олексій Іванович', 32, EGender.Male, 60, 15000);
export let ValeraKol = new MemberClass('Колюх Валерій Вікторович', 48, EGender.Male, 87, 20000);
export let MVV = new MemberClass('Медведчук Віктор Володимирович', 67, EGender.Male, 0, 0.0000000000000001);
export let KIV = new MemberClass('Кива Ілля Володимирович', 44, EGender.Male, 0, 10000);
export let BYA = new MemberClass('Бойко Юрій Анатолійович', 63, EGender.Male, 10, 300000);
export let RVZ = new MemberClass('Рабінович Вадим Зіновійович', 69, EGender.Male, 20, 3000000);
export let KTR = new MemberClass('Козак Тарас Романович', 49, EGender.Male, 20, 30000);
export let OAP = new MemberClass('Осадчук Андрій Петрович', 50, EGender.Male, 90, 30000);
export let PNP = new MemberClass('Піпа Наталія Романівна', 37, EGender.Male, 95, 10000);
export let RKO = new MemberClass('Рудик Кіра Олександрівна', 36, EGender.Male, 70, 30000);
export let RYI = new MemberClass('Рущишин Ярослав Іванович', 54, EGender.Male, 70, 30000);
export let SIR = new MemberClass('Совсун Інна Романівна', 37, EGender.Male, 70, 30000);
export let TUV = new MemberClass('Тимошенко Юлія Володимирівна', 61, EGender.Male, 60, 50000);
export let YAV = new MemberClass('Яценко Антон Володимирович', 44, EGender.Male, 50, 5000);
export let NGM = new MemberClass('Немиря Григорій Михайлович', 61, EGender.Male, 80, 30000);
export let LAV = new MemberClass('Лабунська Анжеліка Вікторівна', 54, EGender.Male, 75, 2000);
export let KII = new MemberClass('Крулько Іван Іванович', 40, EGender.Male, 70, 32500);
export let sn = [DavydArah, MishaAnan, AndriyJyr, AlexKov, ValeraKol];
export let opzj = [MVV, KIV, BYA, RVZ, KTR];
export let golos = [OAP, PNP, RKO, RYI, SIR];
export let bat = [TUV, YAV, NGM, LAV, KII];
export let es = [AndriyParubiy, IrkaGer, MihaZabrod, SonyaFedyn, PetroRoshen]
let ES = new PartyClass(EVROPEYSKA_SOLIDARNIST, es)
let SN = new PartyClass(SLUGA_NARODU, sn)
let OPZJ = new PartyClass(OPZj, opzj)
let GOLOS = new PartyClass(GOLOs, golos)
let BAT = new PartyClass(BATKIVSCHYNA, bat)
let vr2021 = new VrClass()



//Створити такі класи:
// 1) Депутат
//    - імя
//    - вік
//    - стать
//    - ступінь чесності (0-100)
//    - мінімальна сума хабаря
//
// 2) Партія
//    - назва
//    - голова (Депутат)
//    - члени партії (Масив депатутатів)
//
// 3) Верхрвна рада
//    - масив партій
//    - решті полів на вибір
//
// Мають бути присутні такі можливості:
// - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
// - вивести найбільшого хабарника верховної ради
// - вивести фсіх депутатів фракції
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
// Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається
//
// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
// Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
// та бере хабар.
// Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
//
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!
vr2021.add(ES) // добвити партію
vr2021.add(SN) // добвити партію
vr2021.add(OPZJ) // добвити партію
vr2021.add(GOLOS) // добвити партію
vr2021.add(BAT) // добвити партію

vr2021.remove(BAT) // видалити партію<--

vr2021.add(BAT) // добвити партію

// vr2021.showFrakci() // Вивести всі партії

// ES.showFrc() // Вивести конкретну фракцію

ES.remove(PetroRoshen) //Видалити депутат

ES.addDep(PetroRoshen) // додати депутат

// ES.biggestBribeTaker() // вивести хабарників фракції

// ES.bribeTakers() //Вивести найбільшого хабарника фракції

// vr2021.biggestBribeTakerInVr()// вивести хабарників ВР

ES.showAllDep()

// vr2021.showAllMembers()// Вивести всіх депутатів ВР



// console.log(es1.members)
// ES.showAll()





// vr2021.showAllInVR()
// NGM.giveABribe(1000)
// NGM.giveABribe(100000)
// vr2021.showAllGrafter(ES) // вивести найбільшого хабарника у фрації
