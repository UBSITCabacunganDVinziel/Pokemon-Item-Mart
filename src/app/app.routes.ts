import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PokeBall } from './poke-ball/poke-ball';
import { HealingItem } from './healing-item/healing-item';
import { StatusHealing } from './status-healing/status-healing';
import { EscapeItem } from './escape-item/escape-item';
import { ShoppingCart } from './shopping-cart/shopping-cart';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home},
  { path: 'poke-balls', component: PokeBall },
  { path: 'healing-items', component: HealingItem },
  { path: 'status-healing', component: StatusHealing },
  { path: 'escape-items', component: EscapeItem },
  { path: 'checkout', component: ShoppingCart },
  { path: '**', redirectTo: 'home' }
];