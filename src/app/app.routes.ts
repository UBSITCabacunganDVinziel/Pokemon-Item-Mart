import { Routes } from '@angular/router';
import { PokeBall } from './poke-ball/poke-ball';
import { HealingItem } from './healing-item/healing-item';
import { StatusHealing } from './status-healing/status-healing';
import { EscapeItem } from './escape-item/escape-item';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'pokeball', component: PokeBall },
    { path: 'healingitem', component: HealingItem },
    { path: 'statushealing', component: StatusHealing},
    { path: 'escapeitem', component: EscapeItem}
];
