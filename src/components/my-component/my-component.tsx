import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Event() tapped: EventEmitter<string>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return ( 
      <div class="test" onClick={() => this.tapped.emit('You clicked me!')}>
        <span>Hello, World! I'm {this.getText()}</span>
        <div>
          <slot name="one" />
        </div>
        <div>
          <slot name="two" />
        </div>
      </div>
    );
  }
}
