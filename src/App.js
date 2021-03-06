import React from 'react';
import './App.css';
import './mathml.css';
import MathML from './components/MathML';

/*
  <cn>12</cn>

  action: split => also with plus (brackets!)

    <apply>
      <times/>
      <cn>3</cn>
      <cn>4</cn>
    </apply>  
    <apply>
      <times/>
      <cn>2</cn>
      <cn>6</cn>
    </apply>         
*/

/*
    <apply>
      <times/>
      <cn>2</cn>
      <cn>6</cn>
    </apply>  

    action: simplify
    <cn>12</cn>
*/

/*
    <apply>
      <times/>
      <cn>2</cn>
      <cn>6</cn>
    </apply>  

    action: reorder
    <apply>
      <times/>
      <cn>6</cn>
      <cn>2</cn>
    </apply>  
*/

/*
<apply>
  <times/>
  <cn>2</cn>
  <ci>a</ci>
</apply>
*/

/*
  collect same var terms i.e x^2
  equality both sides by factor
  equality multiply both sides by factor
  split equation with ± in to with or
  square both sides
  convert division to multiplication
  combine factors to one
  divide num en den by factor (if var then add and var != 0)
  extract factor (term + term)
  simplyfy division by 1
  make denominator of two divisions same by using a factor of one of the denominators
  subtract term from both sides of equation so that after simplify one term less
  make dirivative or make intergral
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Play with mathematical formula
        </p>
      <MathML>
          <math display="block">
            <apply>
              <eq/>
              <ci>x</ci>
              <apply>
                <divide/>
                <apply>
                  <plus/>
                  <apply>
                    <minus/>
                    <ci>b</ci>
                  </apply>
                  <apply>
                    <root>
                      <degree>2</degree>
                    </root>
                    <apply>
                      <minus/>
                      <apply>
                        <power/>
                        <ci>b</ci>
                        <cn type="integer">2</cn>
                      </apply>
                      <apply>
                        <times/>
                        <cn type="integer">4</cn>
                        <ci>a</ci>
                        <ci>c</ci>
                      </apply>
                    </apply>
                  </apply>
                </apply>
                <apply>
                  <times/>
                  <cn type="rational">2<sep/>3</cn>
                  <ci>a</ci>
                </apply>
              </apply>
            </apply>
          </math>
        </MathML>
        <MathML>
          <math>
            <apply>
              <eq/>
              <ci>x</ci>
              <cn type="integer">0</cn>
            </apply>
          </math>
        </MathML>        
        <pre style={{ textAlign: 'left' }}>{`
          SWAP sel is currently broken

          Selecting parts
          - red is selected
          - mouse click to select numbers or symbols

          Navigation
          - ESC to select parent of current selection
          - RIGHT ARROW select next child of current selection
          - LEFT ARROW select

          Changing math
          - +/- on number (rational or natural)

          Refactor
          - ^ on natural number or symbol raise to power 1
          - / on number divide by 1
          - + on non number add 0
          - * multiply by 1`}
        </pre>
      </header>
    </div>
  );
}

export default App;
