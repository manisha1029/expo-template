import { 
    View,
    Text, 
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { useState } from 'react';

const SignUpScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        // Handle login logic here
        setIsLoading(false);
    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View>
          {/* Login Form */}
          <View>

            <View>
              <View>
                <TextInput
                  placeholder="name"
                  value={name}
                  onChangeText={setName}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>

            <View>
              <View>
                <TextInput
                  placeholder="Email address"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>

            <View>
              <View>
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot password */}
            {/* <View>
              <TouchableOpacity onPress={() => router.push('/forgot-password')}>
                <ThemedText style={styles.forgotPasswordText}>Forgot password?</ThemedText>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[
                styles.loginButton,
                isLoading && styles.loginButtonDisabled
              ]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <ThemedText style={styles.loginButtonText}>
                {isLoading ? 'Signing In...' : 'Sign In'}
              </ThemedText>
            </TouchableOpacity> */}
          </View> 
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default SignUpScreen;