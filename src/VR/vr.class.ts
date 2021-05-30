import {PartyClass} from "../party/party.class";
import {MemberClass} from "../members/member.class";
// import {
//     AlexKov,
//     AndriyJyr,
//     AndriyParubiy,
//     BYA,
//     DavydArah,
//     IrkaGer,
//     KIV,
//     KTR,
//     LAV,
//     MemberClass,
//     MihaZabrod,
//     MishaAnan,
//     MVV,
//     NGM,
//     OAP,
//     PetroRoshen,
//     PNP,
//     RKO,
//     RVZ,
//     RYI,
//     SIR,
//     SonyaFedyn,
//     TUV,
//     ValeraKol,
//     YAV
// } from "../members/member.class";
//
// let allDep= [PetroRoshen, AndriyParubiy, IrkaGer, MihaZabrod, SonyaFedyn, DavydArah, MishaAnan, AndriyJyr, AlexKov, ValeraKol, MVV, KIV, BYA, RVZ, KTR, OAP, PNP, RKO, RYI, SIR, TUV, YAV, NGM, LAV]
// let allPar = [ES, SN, BAT, OPGJ, GOL];

export class VrClass {
    party: Array<PartyClass> = [];


    add(part: PartyClass) {
        this.party.push(part)
    }

    remove(some) {
        return this.party = this.party.filter(value => !(value === some))
    }



    showFrakci() {
        this.party.forEach(value => {
            console.log(value.name);
        })
    }

    showAllGrafter(some: PartyClass) {
        some.members.filter(value => {
            if (value.honesty < 50) {
                console.log(value)
            }
        })
    }



    showAllMembers() {
        this.party.forEach(value => console.log(value.members))
    }

    biggestBribeTakerInVr() {
        let newArray = this.party.reduce((acc, value) => {
            acc.push(...value.members)
            return acc;
        }, [])
        newArray.forEach(value => {
                if (value.honesty < 50) {
                    console.log(value)
                }

            }
        );

    }
    showAllInVR() {
        let newArray = this.party.reduce((acc, value) => {
            acc.push(...value.members)
            return acc;
        }, [])
        newArray.forEach(value => { console.log((`name: ${value.name} age: ${value.age}`))});

    }
}