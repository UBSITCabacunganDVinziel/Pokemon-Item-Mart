import { Component } from '@angular/core';
import { RouterLink } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  clerkMessage = "Welcome to our PokéMart digital portal! Feel free to switch between any of our active retail stock rows on the display panel above.";
}
