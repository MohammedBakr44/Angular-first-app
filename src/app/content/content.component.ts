import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  edit: boolean = false;

  head: string = 'Can Robert Downey Jr. Save Woodworking?';

  img: string = '../../assets/bg.png';

  altText: string = 'astronaut';

  // tslint:disable: max-line-length
  content: string = `We gonna chung fo shizzle mah nizzle fo rizzle, mah home g-dizzle my shizz hizzle amizzle, for sure adipiscing i'm in the shizzle. Cool sapien velizzle, pot da bomb, fizzle quis, my shizz vizzle, doggy. Pellentesque sheezy mofo. Sizzle erizzle. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle izzle dolor ma nizzle turpizzle tempizzle dope. Maurizzle pellentesque nibh bow wow wow turpizzle. Shizzle my nizzle crocodizzle izzle tortizzle. Pellentesque crazy rhoncizzle pot. My shizz hac habitasse platea dictumst. Fizzle sure. Curabitur dope urna, pretium fizzle, mattizzle bling bling, fizzle vitae, nunc. Gangster suscipizzle. Integer semper velit sizzle shizznit.

  Donizzle posuere auctizzle maurizzle. Phasellus uhuh ... yih! elizzle ut my shizz shizzlin dizzle tincidunt. Owned a erat. in lacizzle sed crazy pimpin' shut the shizzle up. Stuff izzle ass sizzle mammasay mammasa mamma oo sa eros ultrices da bomb. Gangsta velizzle tortor, check out this check it out, hendrerizzle quis, adipiscing sizzle, shit. Phat velizzle mah nizzle, aliquizzle consequat, gizzle nizzle, dictizzle owned, turpizzle. Vivamizzle neque. Crizzle lorizzle. Fo shizzle vitae shut the shizzle up ut doggy commodo adipiscing. Fusce pimpin' augue eu nibh away mattizzle. Phasellus fermentum shizznit nizzle dawg. Suspendisse break yo neck, yall leo, sollicitudizzle sizzle, fo shizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle, commodo nec, justo. Donec sure porttitor ligula. Nunc feugiat, tellizzle a ornare tempizzle, sapizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle tincidunt fizzle, egizzle dapibus pede enizzle shut the shizzle up crackalackin. Phasellizzle da bomb get down get down, imperdiet id, mah nizzle yo, pimpin' in, sapien. Ut yo magna vizzle tellivizzle. Sed ante nibh, suscipizzle vitae, break it down funky fresh, rutrizzle check it out, velizzle. Mauris a shit. Sizzle ass magna stuff the bizzle risizzle iaculizzle congue.

  Nunc tellus lorem, shiznit izzle, condimentum eget, vehicula id, diam. Etizzle get down get down leo a sizzle hendrerit mattis. Shit interdizzle magna break it down erizzle commodo fizzle. Etiam pot fermentizzle ligula. Morbi shizzlin dizzle. Maecenizzle quis shizzlin dizzle ac gangster boom shackalack auctizzle. Daahng dawg dizzle nizzle urna. Check out this sollicitudizzle i'm in the shizzle quis purus. Morbi ghetto ligula sit amizzle i saw beyonces tizzles and my pizzle went crizzle. Nizzle shiznit enim for sure arcu. Fo socizzle hizzle izzle magnizzle break yo neck, yall parturient fo shizzle, nascetizzle for sure tellivizzle.

  Da bomb mah nizzle daahng dawg primizzle izzle doggy orci we gonna chung dawg mammasay mammasa mamma oo sa posuere cubilia Pot; Boom shackalack go to hizzle nulla rizzle neque ornare aliquizzle. Bizzle euismizzle erat. Praesent boom shackalack accumsan izzle. Praesent break it down dui, that's the shizzle vitae, sizzle sed, that's the shizzle vitae, phat. Etizzle fo shizzle bibendizzle fo. Sizzle we gonna chung elit et augue shiznit dawg. Nizzle sizzle fizzle. Vivamizzle sagittis. Praesent fo shizzle mah nizzle fo rizzle, mah home g-dizzle lacizzle crazy mah nizzle away adipiscing. Donizzle izzle izzle shizzlin dizzle felis tincidunt the bizzle. Bizzle odio. Nizzle . Rizzle magna gizzle, crunk vitae, porttitor dizzle, sheezy egestizzle, orci. Integizzle rizzle sodales lectus. Etiam mammasay mammasa mamma oo sa tristique fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Phasellizzle mi eros, convallis izzle, nizzle vizzle, ultricies in, nibh. Fusce erat dope, crunk eu, sollicitudizzle eu, nizzle a, mofo. Fusce mauris risizzle, varizzle molestie, adipiscing izzle, bow wow wow sizzle the bizzle, enizzle.

  Nulla gangster. Uhuh ... yih! faucibizzle neque. Vestibulum vulputate arcu izzle stuff. Cras fo shizzle my nizzle odio ass ipsizzle. Ghetto ma nizzle you son of a bizzle rizzle you son of a bizzle. Crizzle laorizzle, daahng dawg sheezy eleifend my shizz, dolizzle sizzle bibendum orci, eu placerizzle quizzle i'm in the shizzle da bomb mi. Etizzle we gonna chung, lectus izzle bizzle rizzle, tellizzle yippiyo get down get down orci, a sagittis nulla mi cool purus. Bling bling rizzle mattizzle shizzlin dizzle. In crackalackin yo dolizzle. Fo shizzle my nizzle funky fresh enizzle, tempizzle away, facilisizzle nizzle, doggy izzle, boofron. Mah nizzle shizzlin dizzle massa mammasay mammasa mamma oo sa i saw beyonces tizzles and my pizzle went crizzle sheezy dictum. Vestibulum crazy away tellivizzle my shizz tincidunt lobortizzle. Phasellizzle fo shizzle my nizzle maurizzle. Maecenizzle lacinia. Bow wow wow black dope enizzle. Pellentesque mi. Its fo rizzle ipsizzle shut the shizzle up sizzle shizzle my nizzle crocodizzle, things adipiscing elizzle. Mauris urna gizzle, check out this egizzle, sagittizzle yippiyo, pharetra eu, neque. Lorem ipsizzle go to hizzle sizzle amet, consectetuer adipiscing elizzle.

  commodo erat ut fo shizzle my nizzle. Cool rizzle. Bow wow wow viverra laorizzle dui. Quisque dawg amizzle its fo rizzle pizzle leo volutpizzle gangster. Boom shackalack away. Get down get down izzle uhuh ... yih! shizznit purus tincidunt aliquam. Brizzle tempor ante. Doggy interdizzle we gonna chung et mofo. Quisque malesuada. Nam pimpin' tellizzle you son of a bizzle diam mollizzle viverra. Nulla facilisi. Cool quizzle check it out a massa molestie pulvinar. Nullam sagittis fo shizzle hendrerizzle velizzle. Cras semper metus sed shiznit. Etizzle da bomb purus non that's the shizzle. Maecenizzle rutrizzle shiz purizzle.
  `;

  constructor() { }

  setContent(el: ElementRef) {
    console.log(this.edit);
    console.log(el);
    this.edit = !this.edit;
    console.log(this.edit);
  }

  changeValue(el: Event) {
    console.log(el);
    this.content = (el.target as HTMLInputElement).value;
  }

  ngOnInit() {
  }

}
