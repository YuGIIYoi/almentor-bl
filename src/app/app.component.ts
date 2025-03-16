import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RouterModule } from '@angular/router';
import { PartnersComponent } from './components/partners/partners.component';
import { ComparisonTableComponent } from './components/comparison-table/comparison-table.component';
import { FaqComponent } from './components/faq/faq.component';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Make it a standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, PartnersComponent, ComparisonTableComponent, PricingComponent, FaqComponent, RouterModule] // ✅ Import dependencies directly
})
export class AppComponent {
  title = 'almentor-website';
}
