import {MemberClass, MemberRemove} from "../members/member.class";

export class PartyClass {
    name: string
    members?: Array<MemberClass>;
    chairman?: MemberClass;


    constructor(name: string, members?: Array<MemberClass>, chairman?: MemberClass) {
        this.name = name;
        this.members = members;
        this.chairman = members.reduce((acc, value) => {
                if (value.bribe > acc.bribe) {
                    return value
                }
                return acc
            }
        );
    }

    showAllDep() {
        console.log(...this.members)
    }

    addDep(some: MemberClass) {
        this.members.push(some)
    }

    remove(some: MemberRemove) {
        this.members = this.members.filter(value => (!(some.name === value.name)))
    }

    biggestBribeTaker() {
        this.members.forEach(value => {
                if (value.honesty < 50) {
                    console.log(value)
                }
            }
        )
    }

    bribeTakers() {
        let memberClasses = this.members.filter(value => value.honesty < 50);

        console.log(memberClasses.reduce((acc, value) => {
                if (value.honesty > acc.honesty) {
                    return value
                }
                return acc
            }
        ))
    }
    showFrc() {
        console.log(`назва фракції ${this.name}`,...this.members,'Голова фракції'+this.chairman.name)

    }
}

