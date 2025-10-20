import { Html, Head, Container, Text, Button, Hr } from '@react-email/components';

export default function PasswordResetEmail({ username, resetUrl }: { username?: string; resetUrl: string }) {
  return (
    <Html>
      <Head />
      <Container style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <Text style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Reset Your Password</Text>
        <Text style={{ color: '#666', lineHeight: '1.5' }}>
          Hi {username || 'there'},
        </Text>
        <Text style={{ color: '#666', lineHeight: '1.5' }}>
          Click below to reset your password. Expires in 1 hour.
        </Text>
        <Button
          href={resetUrl}
          style={{
            backgroundColor: '#000',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Reset Password
        </Button>
        <Hr style={{ borderColor: '#eee', margin: '20px 0' }} />
        <Text style={{ color: '#999', fontSize: '12px' }}>Didnt request? Ignore this.</Text>
      </Container>
    </Html>
  );
}
