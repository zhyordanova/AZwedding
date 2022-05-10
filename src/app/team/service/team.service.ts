import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/compat/database";

import { teamPath } from "src/app/constants/paths.constant";
import { Team } from "src/app/models/team.model";

@Injectable({
    providedIn: 'root',
})
export class TeamService {
    teamsRef: AngularFireList<any>;
    teamRef: AngularFireObject<any>;

    constructor(private firestore: AngularFireDatabase) { 
        this.teamsRef = this.firestore.list(teamPath);
        this.teamRef = this.firestore.object(teamPath);

    }

    AddTeam(team: Team) {
        this.teamsRef.push({
            title: team.title,
            name: team.name,
            company: team.company,
            description: team.description,
            socialMedia: team.socialMedia
        });
    }

    GetTeam(id: string) {
        this.teamRef = this.firestore.object(`${teamPath}/${id}`);
        return this.teamRef;
    }

    GetTeamList() {
        return this.teamsRef;
    }

    
    UpdateTeam(team: Team) {
        this.teamRef.update({
            title: team.title,
            name: team.name,
            company: team.company,
            description: team.description,
            socialMedia: team.socialMedia
        });
    }

    DeleteTeam(id: string) {
        this.teamRef = this.firestore.object(`${teamPath}/${id}`);
        this.teamRef.remove();
    }
}