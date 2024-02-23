import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Section} from '../Section';

// For XState v5 and its React library
import {createMachine} from 'xstate5'; // v5, using the alias
import {useMachine} from '@xstate5/react'; // React library for v5, using the alias

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'Inactive',

  states: {
    Inactive: {
      on: {toggle: 'Active'},
    },
    Active: {
      on: {toggle: 'Inactive'},
    },
  },
});

const Toggler = () => {
  const [state, send] = useMachine(toggleMachine);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => send({type: 'toggle'})}
        style={{
          backgroundColor: state.matches('Active') ? 'green' : 'gray',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>
          {state.matches('Inactive')
            ? 'Click to activate'
            : 'Active! Click to deactivate'}
        </Text>
        <Text>{JSON.stringify(state, null, 2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MyXstateV5Component = () => {
  return (
    <Section title="xstate v5">
      <Toggler />
    </Section>
  );
};
