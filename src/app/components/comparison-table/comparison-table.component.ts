import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comparison-table',
  standalone: true, // ✅ Standalone Component
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.css'],
  imports: [CommonModule] // ✅ Import CommonModule for *ngFor to work
})
export class ComparisonTableComponent {
  features = [
    { category: 'السعر', items: [''] },
    { category: 'حدود المستخدمين', items: ['الحد الأدنى لعدد المستخدمين', 'الحد الأقصى لعدد المستخدمين'] },
    { category: 'إدارة الدورات', items: ['تعيين الدورات مع رسائل مخصصة','مجموعات مستخدمين مخصصة', 'إدارة متقدمة للمجموعات', 'تحميل الدورات الخاصة'] },
    { category: 'التقارير والتحليلات', items: ['نشاط المستخدمين', 'تقارير الأداء', 'تقارير تسجيل الدخول'] },
    { category: 'التكاملات', items: ['تسجيل دخول موحد', 'تكامل LMS'] },
    { category: 'تجربة المتعلم', items: ['تقييمات بعد الدورات', 'توصيات الدورات المخصصة','ملاحظات'] },
    { category: 'الدعم', items: ['شريك مخصص لنجاح العملاء'] }
  ];

  plans = {
    teams: ['1,915 جنيه / للمستخدم/سنوياً','5 (الدفع لكل مقعد)','24 (الدفع لكل مقعد)','✔', '✔', '✔', '✔', '✔', '✔', '—', '—', '—'],
    enterprises: ['اتصل بالمبيعات','5 (الدفع لكل مقعد)','غير محدود (الدفع لكل مقعد)','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔','✔','✔','✔']
  };

  /**
   * Toggle a feature's status between '✔' and '—' for a given plan type.
   * @param planType 'teams' or 'enterprises'
   * @param featureIndex The index of the feature in the `plans` array
   */
  toggleFeature(planType: 'teams' | 'enterprises', featureIndex: number) {
    // Ensure we don't toggle pricing or user limits
    if (featureIndex >= 10) return;

    this.plans[planType][featureIndex] = this.plans[planType][featureIndex] === '✔' ? '—' : '✔';
  }

  /**
   * Calculate the index in the plans array based on category and item index.
   * @param categoryIndex Index of the category in `features`
   * @param itemIndex Index of the item within the category
   * @returns The flattened index in the `plans.teams` and `plans.enterprises` arrays
   */
  getFeatureIndex(categoryIndex: number, itemIndex: number): number {
    let index = 0;
    for (let i = 0; i < categoryIndex; i++) {
      index += this.features[i].items.length;
    }
    return index + itemIndex;
  }
}
