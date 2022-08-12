import { Component, OnInit } from '@angular/core';
import { ExhangeRateService } from '../exhange-rate.service';
@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  exchangeData:any[]=[]
  constructor(private exchangeService: ExhangeRateService) { }
  api_key='7f1db64bbe7648f1a7253931f7c1b06f'
  public base:any
  public target:any
FindExchageRates(){
  this.exchangeService.getExchange(this.api_key,this.base, this.target).subscribe(data => this.exchangeData= data)
}
  ngOnInit() {
    this.exchangeService.getExchange(this.api_key,this.base, this.target).subscribe(data => this.exchangeData= data)
  }

}
