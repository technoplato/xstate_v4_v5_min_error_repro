import {Section} from '../Section';

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// For XState v4 and its React library
import {Machine} from 'xstate'; // v4
import {useMachine} from '@xstate/react'; // React library for v4

const toggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: {TOGGLE: 'active'},
    },
    active: {
      on: {TOGGLE: 'inactive'},
    },
  },
});

export const Toggler = () => {
  const [state, send] = useMachine(toggleMachine);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => send('TOGGLE')}
        style={{
          backgroundColor: state.matches('active') ? 'green' : 'gray',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>
          {state.matches('inactive')
            ? 'Click to activate'
            : 'Active! Click to deactivate'}
        </Text>
        <Text>{JSON.stringify(state.value, null, 2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MyXstateV4Component = () => {
  return (
    <Section title="xstate v4">
      <Toggler />
    </Section>
  );
};
