import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { Skill } from '../model';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: [ './skills.component.scss' ]
})
export class SkillsComponent implements OnInit {
	skills: Skill[];
	skillToAdd: string;

	constructor(private service: SkillsService) {}

	ngOnInit() {
		this.service.getSkills().subscribe((data) => (this.skills = data));
	}

	removeSkill(s: Skill) {
		this.skills = this.skills.filter((i: Skill) => i !== s);
		this.service.deleteSkill(s);
	}

	addSkill() {
		let sk: Skill = { id: this.skills.length + 1, name: this.skillToAdd, hours: 7, completed: false };
		this.skills.push(sk);
	}
}
